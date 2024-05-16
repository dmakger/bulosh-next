// ======={ AUTH }=======
class AUTH {
    private root = '/auth'

    LOGIN = `${this.root}/login`
    SIGN_UP = `${this.root}/signup`
}

export const AUTH_PAGES = new AUTH()


// ======={ MAIN }=======
class MAIN {
    private root = ''

    HOME = `${this.root}/`
    CATALOG = `${this.root}/catalog`
    PRODUCT = (id: string | number) => `${this.root}/product/${id}/`
}

export const MAIN_PAGES = new MAIN()


// ======={ DASHBOARD }=======
class DASHBOARD {
    private root = '/i'

    HOME = this.root
    CART = `${this.root}/cart`

}

export const DASHBOARD_PAGES = new DASHBOARD()