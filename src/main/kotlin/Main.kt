import khttp.responses.Response
import org.apache.commons.lang3.StringUtils

class Main {
}

fun main(args: Array<String>) {
    val response: Response = khttp.get("https://www.vg.no/");
    val responseText = response.text
    println(responseText)

    val findMe = "gfx/icons/pluss.svg";
    val count = StringUtils.countMatches(responseText, findMe);

    println("There are $count number of VG pluss cases currently");
}
