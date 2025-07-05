

export function formatToNaira(amount,currency="NGN",fraction=0) {
  // Create a new instance of Intl.NumberFormat for Nigerian currency
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: fraction
  });

  // Format the given amount
  return formatter.format(amount);
}

export const vscodeExtensions = [
  {
    name: "Prettier - Code Formatter",
    publisher: "Prettier",
    installs: "59M+",
    rating: 4.8,
    description: "Opinionated code formatter supporting many languages.",
    url:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    img: "https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/11.0.0/1723648421534/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "ESLint",
    publisher: "Microsoft",
    installs: "18M+",
    rating: 4.7,
    description: "Integrates ESLint JavaScript into VS Code.",
    url:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    img: "https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/3.0.15/1749741161930/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "Tailwind CSS IntelliSense",
    publisher: "Tailwind Labs",
    installs: "10M+",
    rating: 4.9,
    description: "Intelligent autocompletion and linting for Tailwind CSS.",
    url:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    img: "https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.14.23/1750344716719/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "GitLens",
    publisher: "GitKraken",
    installs: "15M+",
    rating: 4.9,
    description: "Supercharge the Git capabilities in VS Code.",
    url:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
    img: "https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/2025.7.105/1751361046708/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "Auto Close Tage",
    publisher: "Jun Han",
    installs: "4M+",
    rating: 4.8,
    description: "Enhances Markdown editing experience.",
    url:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
    img:"https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.15/1702959502562/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "GitHub Copilot",
    publisher: "GitHub",
    installs: "4M+",
    rating: 4.8,
    description: "AI-powered code completion.",
    url:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
    img:"https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.338.1652/1751386531132/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "Live Server",
    publisher: "Ritwick Dey",
    installs: "4M+",
    rating: 4.8,
    description: "Launch a development local server with live reload.",
    url:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
    img:"https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1736542717282/Microsoft.VisualStudio.Services.Icons.Small",
  },
  {
    name: "Quokka.js",
    publisher: "Wallaby.js",
    installs: "4M+",
    rating: 4.8,
    description: "Live scratchpad for JavaScript and TypeScript.",
    url:"https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode",
    img:"https://wallabyjs.gallerycdn.vsassets.io/extensions/wallabyjs/quokka-vscode/1.0.731/1751065366674/Microsoft.VisualStudio.Services.Icons.Small",
  },
];