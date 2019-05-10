function page(pagenumber) {
    if (pagenumber != null) {
        switch (pagenumber) {
            case 1:
                $(function () { $("#body_pages").load("index.html") });
                break;
            case 2:
                $(function () { $("#body_pages").load("shop.html") });
                break;
            case 3:
                $(function () { $("#body_pages").load("blog-single.html") });
                break;
            case 4:
                $(function () { $("#body_pages").load("about-us.html") });
                break;
            case 5:
                $(function () {
                    $("#body_pages").load("contact.html")
                });
                break;
            case 6:
                $(function () { $("#body_pages").load("single-product.html") });
                break;
            default:
                break;
        }
    }
}
function pagecontact(pagenumber) {

    if (pagenumber != null) {
        window.location.href = "layout.html";
        
        switch (pagenumber) {
            case 1:
                $(function () { $("#body_pages").load("index.html") });
                break;
            case 2:
                $(function () { $("#body_pages").load("shop.html") });
                break;
            case 3:
                $(function () { $("#body_pages").load("blog-single.html") });
                break;
            case 4:
                $(function () { $("#body_pages").load("about-us.html") });
                break;
            case 5:
                $(function () {
                    $("#body_pages").load("contact.html")
                });
                break;
            case 6:
                $(function () { $("#body_pages").load("single-product.html") });
                break;
            default:
                break;
        }
    }
}


