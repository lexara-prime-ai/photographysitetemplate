// DEBUGGING
const log = console.log;
class AppRoot extends HTMLElement {
    static define: any;
    static render() {

        const defaultContent = `
            <h1 class="welcome-title">Welcome Page</h1>
        `;

        const welcomeTitle = <HTMLElement>document.createElement('div');
        welcomeTitle.innerHTML = `${defaultContent}`;
        document.body.innerHTML = defaultContent;
    }
}

AppRoot.render();
AppRoot.define('app-root', AppRoot);