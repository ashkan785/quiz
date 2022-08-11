export default function poetry(verse) {
    let result = null
    let last = verse[verse.length - 1]
    let ans = ""
    bank = ["ای خوشا مستانه سر در پای دلبر داشتن - دل تهی از خوب و زشت چرخ اخضر داشتن",
            "کبوتر بچه‌ای با شوق پرواز - بجرئت کرد روزی بال و پر باز",
            "وقت سحر، به آینه‌ای گفت شانه‌ای - کاوخ! فلک چه کجرو و گیتی چه تند خوست",
            "بلبل آهسته به گل گفت شبی - که مرا از تو تمنائی هست",
            "شنیدستم که وقت برگریزان - شد از باد خزان، برگی گریزان",
            "دید موری در رهی پیلی سترگ - گفت باید بود چون پیلان بزرگ",
            "گفت ماهیخوار با ماهی ز دور - که چه میخواهی ازین دریای شور",
            "مرغی بباغ رفت و یکی میوه کند و خورد - ناگه ز دست چرخ بپایش رسید سنگ",
            "حکایت کرد سرهنگی به کسری - که دشمن را ز پشت قلعه راندیم",
            "شباهنگام، کاین فیروزه گلشن - ز انوار کواکب، گشت روشن",
            "زاغی بطرف باغ، بطاوس طعنه زد - کاین مرغ زشت روی، چه خودخواه و خودنماست",
            "پیرمردی، مفلس و برگشته بخت - روزگاری داشت ناهموار و سخت"]
    bank.forEach(element => {
        if(last == element[0]){
            result =  element
        }
        
    });

    if (result === null){
        return null
    } else {
        return result
    }
}
