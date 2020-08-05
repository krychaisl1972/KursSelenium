package Przyklad2;

import org.junit.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.junit.Assert.assertEquals;

public class Amazon_formular_check {

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
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
        // Opoznienie zamkniecia strony
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }
    @Test
    public void inputData() {

        // Znajdź element wprowadzania tekstu na podstawie jego id (imie)
        WebElement inputFirstName = driver.findElement(By.id("first-name"));
        // Wyczyść teskst zapisany w elemencie
        inputFirstName.clear();
        // Wpisz informacje do wyszukania
            if(inputFirstName.isDisplayed()) {
                inputFirstName.sendKeys("Karol");
            }else {
                Assert.fail();
        }

        // Znajdź element wprowadzania tekstu na podstawie jego id (nazwisko)
        WebElement inputLastName = driver.findElement(By.id("last-name"));
        // Wyczyść teskst zapisany w elemencie
        inputLastName.clear();
        // Wpisz informacje do wyszukania
        if(inputLastName.isDisplayed()) {
            inputLastName.sendKeys("Kowalski");
        }else {
            Assert.fail();
        }

        // Wybor wymaganego wybor za pomoca jego nazwy (plec)
        WebElement markGender = driver.findElement(By.name("gender"));
        markGender.click();

        // Znajdź element wprowadzania tekstu na podstawie jego nazwy (data urodzenia)
        WebElement inputDateBirth = driver.findElement(By.id("dob"));
        inputDateBirth.click();
        // Wyczyść teskst zapisany w elemencie
        inputDateBirth.clear();
        // Wpisz informacje do wyszukania
        if(inputLastName.isDisplayed()) {
            inputDateBirth.sendKeys("05/22/2010");

        }else {
            assertEquals("Date of birth", driver.findElement(By.xpath("//label[@for = 'dob']")).getText());
        }

        // Znajdź element wprowadzania tekstu na podstawie jego id (adres)
        WebElement inputAddress = driver.findElement(By.id("address"));
        // Kliknij aby schowac kalendarz
        inputAddress.click();

        // Wyczyść teskst zapisany w elemencie
        inputAddress.clear();
        // Wpisz informacje do wyszukania
            if(inputAddress.isDisplayed()) {
                inputAddress.sendKeys("Prosta 51");

            }else {
                assertEquals("Address", driver.findElement(By.xpath("//label[@for = 'address']")).getText());
            }

        // Znajdź element wprowadzania tekstu na podstawie jego nazwy (email)
        WebElement inputEmail = driver.findElement(By.name("email"));
        // Wyczyść teskst zapisany w elemencie
        inputEmail.clear();
        // Wpisz informacje do wyszukania
                if(inputEmail.isDisplayed()) {
                    inputEmail.sendKeys("karol.kowalski@mailinator.com");

                }else {
                    assertEquals("Email", driver.findElement(By.xpath("//label[@for = 'email']")).getText());
                }

        // Znajdź element wprowadzania tekstu na podstawie jego sciezki (haslo)
        WebElement inputPassword = driver.findElement(By.xpath("//input[@id='password']"));
        // Wyczyść teskst zapisany w elemencie
        inputPassword.clear();
        // Wpisz informacje do wyszukania
                    if(inputPassword.isDisplayed()) {
                        inputPassword.sendKeys("Pass123");
                    }else {
                        Assert.fail();
                    }

        // Znajdź element wprowadzania tekstu na podstawie jego nazwy (company)
        WebElement inputCompany = driver.findElement(By.name("company"));
        // Wyczyść teskst zapisany w elemencie
        inputCompany.clear();
        // Wpisz informacje do wyszukania
                        if(inputCompany.isDisplayed()) {
                            inputCompany.sendKeys("Coders Lab");
                        }else {
                            Assert.fail();
                        }

        // Znajdź element wprowadzania tekstu na podstawie jego id (comment)
        WebElement inputComment = driver.findElement(By.name("comment"));
        // Wyczyść teskst zapisany w elemencie
        inputComment.clear();
        // Wpisz informacje do wyszukania
                            if(inputComment.isDisplayed()) {
                                inputComment.sendKeys("To jest mój pierwszy automat testowy");
                            }else {
                                Assert.fail();
                            }

        // Wybor klawisza "Submit"
        WebElement submitButton = driver.findElement(By.cssSelector("button.btn.btn-primary"));
        // Kliknij aby wyslac formularz
        submitButton.click();
    }

    @After
    public void tearDown() throws Exception {

        // Zamknij przeglądarkę
        driver.quit();

    }
}

