if (localStorage.getItem("thememode") == null){
    if (ts_configs.defaultTheme == "lightmode"){
        jQuery(".logos img").attr('src', 'https://dramacooll.com.tr/wp-content/uploads/2024/07/logo.png');
        jQuery("#thememode input[type='checkbox']").prop('checked', false);
    }else{
        jQuery(".logos img").attr('src', 'https://dramacooll.com.tr/wp-content/uploads/2024/07/logo.png');
        jQuery("#thememode input[type='checkbox']").prop('checked', true);
    }
}else if (localStorage.getItem("thememode") == "lightmode"){
    jQuery(".logos img").attr('src', 'https://dramacooll.com.tr/wp-content/uploads/2024/07/logo.png');
    jQuery("#thememode input[type='checkbox']").prop('checked', false);
}else{
    jQuery(".logos img").attr('src', 'https://dramacooll.com.tr/wp-content/uploads/2024/07/logo.png');
    jQuery("#thememode input[type='checkbox']").prop('checked', true);
}
