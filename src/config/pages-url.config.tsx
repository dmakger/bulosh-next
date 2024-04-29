
// ======={ MAIN }=======
class MAIN {
    private root = ''

    HOME = `${this.root}/`
    CATALOG = `${this.root}/catalog`
}

export const MAIN_PAGES = new MAIN()


// ======={ DASHBOARD }=======
class DASHBOARD {
    private root = '/i'

    HOME = this.root
    CART = `${this.root}/cart`

}

export const DASHBOARD_PAGES = new DASHBOARD()