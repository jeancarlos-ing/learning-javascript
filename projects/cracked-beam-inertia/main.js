function crackedInertia() {
  const base = document.getElementById("base").value * 1.0;
  const altura = document.getElementById("altura").value * 1.0;
  const rec = document.getElementById("rec").value * 1.0;
  const ass = document.getElementById("ass").value * 1.0e-4;
  const asp = document.getElementById("asp").value * 1.0e-4;
  const fc = document.getElementById("fc").value * 1.0;

  const d = altura - rec;
  const dp = rec;
  const es = 200e3;
  const ec = 4700 * Math.sqrt(fc);
  const n = es / ec;

  //  Calculo de altura de eje neutro "C"
  const aa = base / 2;
  const bb = asp * (n - 1) + ass * n;
  const cc = -asp * (n - 1) * dp - ass * n * d;

  const c = -bb + Math.sqrt(Math.pow(bb, 2) - 4 * aa * cc) / (2 * aa);

  // Calculo de Incercia fisurada Icr
  const Ig = (base * Math.pow(altura, 3)) / 12;
  const IConc = (base * Math.pow(c, 3)) / 12 + Math.pow(c / 2, 2) * base * c;
  const IAsp = asp * (n - 1) * Math.pow(c - dp, 2);
  const IAs = ass * n * Math.pow(d - c, 2);

  const Icr = IConc + IAs + IAsp;

  // Mostrar resultados
  document.getElementById("resultados").innerText = `
      Módulo elástico del Concreto = ${ec}[Mpa]
      Factor de transformación n = ${n}
      Altura del eje neutro c = ${c}[m]
      Inercia bruta Ig = ${Ig}[m^4]
      Inercia Fisurada Icr = ${Icr}[m^4]`;
}
