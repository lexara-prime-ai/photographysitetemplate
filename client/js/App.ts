const log = console.log;

const root = <HTMLElement>document.getElementById('root');

const defaultContent = `
    <h1>Welcome Page</h1>
`;

const welcomeTitle = <HTMLElement>document.createElement('div');
welcomeTitle.innerHTML = `${defaultContent}`;
welcomeTitle.classList.toggle('welcome-title');
root.appendChild(welcomeTitle);