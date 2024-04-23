function FullBanner(props) {
    return (
        <>
            <img className="banner-img" src="../img/fullBanner-1.png" alt="" />
            <div className="banner-block">
                <h1 className="banner-title">{props.BannerTitle}</h1>
                <p className="banner-breadcrumb">{props.BannerBreadcrumb}</p>
            </div>
        </>
    );
}


export default FullBanner;
