const devMode = false
const imagesEndpoint = "/images"
const proxyEndpoint = "/proxy"

const devApiUrl = "http://localhost:2000"
const prodApiUrl = "https://slami.ge"

module.exports = {
  devMode: devMode,
  devApiUrl: devApiUrl,
  prodApiUrl: prodApiUrl,
  scrapeApi: devMode ? devApiUrl + imagesEndpoint : prodApiUrl + imagesEndpoint,
  proxyApi: devMode ? devApiUrl + proxyEndpoint : prodApiUrl + proxyEndpoint,
  paragraph_delimiter_key: "Enter",
  paragraph_delimiter_char: "\u21B5",
  delete_keys: ["Backspace", "Delete"],
  important_word_length: 4,
  custom_media_source: "self",
  default_text_position: { x: 7, y: 7 }, // default position of slide text
  default_text_size: { width: 0, height: 0 },
  canvas_size: 1024,
  video_preview_size: 360,
  default_slide_duration_seconds: 1.0,
  duration_label: "წამი",
  choose_font_label: "ფონტი",
  about_us_label: "ჩვენს შესახებ",
  contact_label: "კონტაქტი",
  copyright_label: "© 2018 Slami",
  privacy_policy_label: "კონფიდენციალურობის პოლიტიკა",
  faq_label: "ხშირად დასმული კითხვები",
  img: {
    site_logo: "img/slami-logo.png",
  },
  partners: [
    {
      website_href: "https://www.internews.org/",
      logo_src: "img/internews.png",
      alt_text: "Internews logo",
    },
    {
      website_href: "http://www.internews.ge/",
      logo_src: "img/internews-ge.png",
      alt_text: "Internews Georgia logo"
    },
    {
      website_href: "https://btu.ge/",
      logo_src: "img/btu.png",
      alt_text: "BTU logo"
    }
  ],
  alerts: {
    no_slides_chosen: "გთხოვთ ამოირჩიოთ ერთი სლაიდი მაინც"
  },
  fonts: ["Arial", "BPG Arial", "NotoSansGeo"],
  default_font: "Arial",
  transitions:{
    cut: "Cut",
    fade: "Fade"
  },
  default_slide_transition: "Fade"
}