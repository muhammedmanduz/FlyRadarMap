
import moment from "moment/moment"

//türkçe diline çevir
import  "moment/locale/tr"

//unix zaman formatı: 1970 ten itibaren saniye olarak geçen süredir kullanıcı dostu formata çevirir

 const formatDate=(unix_time)=>{

    if (unix_time===0 || !unix_time) return "Bilinmiyor";

    const formatted=new Date(unix_time*1000);
    return moment(formatted).calendar();

};


export default formatDate;