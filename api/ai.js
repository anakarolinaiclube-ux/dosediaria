export default function handler(req, res) {
  const { name } = req.query;
  const quotes =[
    "O sucesso não aceita desculpas. Aja agora.",
    "Você está exatamente onde suas decisões te trouxeram.",
    "A dor do esforço de hoje é o seu poder de amanhã.",
    "Sua liberdade começa quando você para de procrastinar."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Extrai apenas o primeiro nome para gerar proximidade
  const firstName = name ? name.trim().split(' ')[0] : 'Vencedor';

  res.status(200).json({
    message: `${firstName}, segue sua dose diária de motivação, preste bastante atenção...`,
    quote: randomQuote,
    // Placeholder para o link de áudio gerado via ElevenLabs, AWS Polly, OpenAI TTS, etc.
    // Usaremos um áudio curto de placeholder para ilustrar o fluxo de Áudio 1 -> Áudio 2
    greetingAudioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  });
}
