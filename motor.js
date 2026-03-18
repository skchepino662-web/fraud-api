export const analizarMensaje = (msg) => {

  let score = 0;

  const links = (msg.match(/http|www/g) || []).length;

  if (links) score += 20;
  if (links > 1) score += 15;

  if (/bit.ly|tinyurl|t.co/.test(msg)) score += 45;

  if (/urgente|urgent|ahora/.test(msg)) score += 12;
  if (/banco|bank|cuenta/.test(msg)) score += 30;
  if (/click|clic|haz/.test(msg)) score += 25;
  if (/premio|ganaste/.test(msg)) score += 20;
  if (/dinero|\$/.test(msg)) score += 15;

  if (links && /urgente/.test(msg)) score += 50;
  if (/premio/.test(msg) && /click/.test(msg)) score += 55;
  if (links && /banco/.test(msg)) score += 70;

  let nivel = "🟢 Seguro";
  if (score > 400) nivel = "🔴 Crítico";
  else if (score > 300) nivel = "🟠 Alto";
  else if (score > 150) nivel = "🟡 Medio";

  return {
    score,
    nivel,
    riesgo: (score / 500 * 100).toFixed(2) + "%"
  };
};
