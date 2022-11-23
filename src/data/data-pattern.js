const name = ['what is your name', 'your name', 'nama', 'siapa nama kamu', 'nama kamu siapa'];
const hobby = ['apa hobby kamu', 'hobby', 'apa hobi kamu', 'hobi kamu', 'kamu suka bermain apa', 'kamu suka apa'];
const human = ['manusia atau robot', 'apakah kamu manusia', 'apakah kamu robot',' kamu pasti robot', 'kamu seperti manusia'];
const greetings = ['selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam'];
const thanks = ['hari yang indah', 'hari ini sangat indah', 'good day'];
const okey = ['mantap', 'ok', 'okok', 'pintar', 'okay'];
const hi = ['hi', 'halo', 'hello'];
const condition = ['kabar', 'apa kabar kamu', 'how are you'];
const best = ['negara terbaik', 'negara dengan alam terbaik', 'negara dengan banyak tempat wisata'];

const worried = ['apakah biaya mahal', 'saya tidak memiliki budget besar', 'saya ingin travelling dengan budget kecil'];
const range = ['range harga', 'budget yang harus disediakan', 'banyak budget yang harus dibawa'];
const weather = ['cuaca sekarang', 'cuaca di indonesia', 'apakah ini saat yang tepat untuk liburan'];
const food = ['apakah makanan enak', 'makanan apa saja di indonesia', 'bagaimana jika makanan tidak enak'];
const beach = ['pantai terkenal', 'pantai paling terkenal', 'pantai terbaik'];
const zoo = ['kebun binatang terkenal', 'kebun binatang terbaik', 'kebun binatang populer'];
const mountainH = ['gunung tertinggi', 'gunung paling tinggi', 'gunung tertinggi di indonesia'];
const mountainF = ['gunung terpopuler', 'gunung paling terkenal', 'gunung terkenal'];
const reef = ['terumbu karang terkenal', 'terumbu karang populer', 'terumbu karang paling bagus'];

const animal = ['ada hewan special apa saja yang ada di indonesia', 'contoh hewan di indonesia', 'hewan spesial'];
const history = ['adakah tempat bersejarah di indonesia', 'contoh tempat bersejarah di indonesia', 'peninggalan bersejarah'];
const batam = ['adakah tempat bersejarah di indonesia', 'wisata apa aja yang ada di batam', 'wisata batam'];
const bandung = ['adakah tempat wisata di bandung', 'wisata apa aja yang ada di bandung', 'wisata bandung'];
const makassar = ['adakah tempat wisata di makasar', 'wisata apa aja yang ada di makassar', 'wisata makassar'];
const medan = ['adakah tempat wisata di medan', 'wisata apa aja yang ada di medan', 'wisata medan'];
const surabaya = ['adakah tempat wisata di surabaya', 'wisata apa aja yang ada di surabaya', 'wisata surabaya'];
const jakarta = ['adakah tempat wisata di jakarta', 'wisata apa aja yang ada di jakarta', 'wisata jakarta'];
const bali = ['adakah tempat wisata di bali', 'wisata apa aja yang ada di bali', 'wisata bali'];
const cities = ['Kota - kota apa yang paling terkenal', 'kota terkenal', 'kota populer'];


const waktu = ['ini hari apa', 'sekarang hari apa', 'hari sekarang', 'hari', 'ini bulan apa', 'sekaranb ulan apa', 'bulan sekarang', 'bulan', 'ini tahun berapa', 'sekarang tahun berapa', 'tahun sekarang', 'tahun', 'sekarang jam berapa', 'jam sekarang', 'jam', 'sekarang menit keberapa', 'menit sekarang', 'menit', 'sekarang detik keberapa', 'detik sekarang', 'detik'];
const makian = ['anjing', 'babi', 'asu', 'bangsat', 'bodoh'];


const data = [
  ...name.map(w => ({ phrase: w, result: { name: 1 }})),
  ...hobby.map(w => ({ phrase: w, result: { hobby: 1 }})),
  ...human.map(w => ({ phrase: w, result: { human: 1 }})),
  ...greetings.map(w => ({ phrase: w, result: { greetings: 1 }})),
  ...makian.map(w => ({ phrase: w, result: { makian: 1 }})),
  ...thanks.map(w => ({ phrase: w, result: { thanks: 1 }})),
  ...okey.map(w => ({ phrase: w, result: { okey: 1 }})),
  ...hi.map(w => ({ phrase: w, result: { hi: 1 }})),
  ...condition.map(w => ({ phrase: w, result: { condition: 1 }})),
  ...best.map(w => ({ phrase: w, result: { best: 1 }})),
  ...worried.map(w => ({ phrase: w, result: { worried: 1 }})),
  ...range.map(w => ({ phrase: w, result: { range: 1 }})),
  ...weather.map(w => ({ phrase: w, result: { weather: 1 }})),
  ...food.map(w => ({ phrase: w, result: { food: 1 }})),
  ...beach.map(w => ({ phrase: w, result: { beach: 1 }})),
  ...zoo.map(w => ({ phrase: w, result: { zoo: 1 }})),
  ...mountainH.map(w => ({ phrase: w, result: { mountainH: 1 }})),
  ...mountainF.map(w => ({ phrase: w, result: { mountainF: 1 }})),
  ...reef.map(w => ({ phrase: w, result: { reef: 1 }})),
  ...animal.map(w => ({ phrase: w, result: { animal: 1 }})),
  ...history.map(w => ({ phrase: w, result: { history: 1 }})),
  ...batam.map(w => ({ phrase: w, result: { batam: 1 }})),
  ...bandung.map(w => ({ phrase: w, result: { bandung: 1 }})),
  ...makassar.map(w => ({ phrase: w, result: { makassar: 1 }})),
  ...medan.map(w => ({ phrase: w, result: { medan: 1 }})),
  ...surabaya.map(w => ({ phrase: w, result: { surabaya: 1 }})),
  ...jakarta.map(w => ({ phrase: w, result: { jakarta: 1 }})),
  ...bali.map(w => ({ phrase: w, result: { bali: 1 }})),
  ...cities.map(w => ({ phrase: w, result: { cities: 1 }})),
  ...waktu.map(w => ({ phrase: w, result: { waktu: 1 }})),
];

export default data;
