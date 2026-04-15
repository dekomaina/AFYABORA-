import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'client', 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace Header Logo
  content = content.replace(
    /<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">\s*<Heart className="w-6 h-6 text-white" \/>\s*<\/div>/g,
    `<img src="/images/logo.png" alt="Afya Bora Logo" className="w-12 h-12 object-contain" />`
  );

  // Replace Footer Logo
  content = content.replace(
    /<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">\s*<Heart className="w-5 h-5 text-white" \/>\s*<\/div>/g,
    `<img src="/images/logo.png" alt="Afya Bora Logo" className="w-10 h-10 object-contain bg-white rounded p-1" />`
  );

  // Since we might have removed the only usage of Heart, let's keep it imported to avoid unused import errors just in case, or we can leave it as Vite usually just warns. 
  // Actually, Heart is used in Home.tsx for Core Values.
  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log('Logo replaced in all files');
