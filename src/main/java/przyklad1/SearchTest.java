package przyklad1;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.junit.*;

    public class SearchTest {

        private WebDriver driver;

        @Before
        public void setUp() {
            System.setProperty("webdriver.gecko.driver",
                    "src/main/resources/Drivers/geckodriver");
            // Uruchom nowy egzemplarz przeglądarki Chrome
            // driver = new ChromeDriver();
            driver = new FirefoxDriver();

            // Zmaksymalizuj okno przeglądarki
            driver.manage().window().maximize();
            // Przejdź do Google
            driver.get("http://www.google.com");
        }
        @Test
        public void testGoogleSearch() {
            // Znajdź element wprowadzania tekstu na podstawie jego nazwy
            WebElement element = driver.findElement(By.name("q"));
            // Wyczyść teskst zapisany w elemencie
            element.clear();

            // Wpisz informacje do wyszukania
            element.sendKeys("Testowanie Selenium WebDriver");

            // Prześlij formularz
            element.submit();
        }
        @After
        public void tearDown() throws Exception {
            // Zamknij przeglądarkę
            // driver.quit();
        }
}
