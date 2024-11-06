class LoginPage{


    constructor(page){
        this.page = page
        this.username = page.getByPlaceholder("email@example.com")
        this.password = page.locator("#userPassword")
        this.loginBtn = page.locator("#login")
        this.errorMessage = page.locator("#toast-container")
        this.homePageIdentifier = page.locator(".fa-sign-out")
    }

    async launchURL(url){
        await this.page.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

}

module.exports = {LoginPage}


