package przyklad1;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Zadanie3 {
    private WebDriver driver;
    @Before
    public void setUp() {
        System.setProperty("webdriver.gecko.driver", "src/main/resources/Drivers/geckodriver");
        driver = new FirefoxDriver();
        //web driver poczeka na każdy element 5s zanim uzna, że jest niewidoczny na stronie
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do Google
        driver.get("https://prod-kurs.coderslab.pl/index.php?id_category=6&controller=category");
    }
    @Test
    public void filterProducts() throws InterruptedException {
        //wyszukaj filtr
        WebElement priceFilter = driver.findElement(By.cssSelector("input[data-search-url*='11-14']"));
        //kliknij na wybrany filtr
        priceFilter.click();
        //poczekaj aż filtrowanie się skończy
        Thread.sleep(1000);
        //pobierz przefiltrowane elementy i zapisz je w liście
        List<WebElement> pricesList = driver.findElements(By.xpath("//span[@class='price']"));
        //przeiteruj po liście elementów i sprawdź czy cena jest z oczekiwanego przedziału
        for (WebElement priceElement : pricesList) {
            double price = Double.parseDouble(priceElement.getText().substring(1));
            if (price >= 11 && price <= 14) {
                System.out.println("Price " + price + " is in range " + 11 + "-" + 14);
            } else {
                Assert.fail("Price " + price + " is NOT in range " + 11 + "-" + 14);
            }
        }
    }
    @After
    public void tearDown() {
        // Zamknij przeglądarkę
        driver.quit();
    }
}
