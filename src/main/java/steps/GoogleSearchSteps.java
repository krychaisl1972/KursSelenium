package steps;

import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

public class GoogleSearchSteps {
    private WebDriver driver;

    @Given("an open browser with google.com")
    public void openGoogleSearch() {
        // Skonfiguruj sterownik przeglądarki
        System.setProperty("webdriver.gecko.driver",
                "src/main/resources/Drivers/geckodriver");
        // Uruchom nowy egzemplarz przeglądarki Chrome
        driver = new FirefoxDriver();
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do Google
        driver.get("http://www.google.com");}

    @When("a keyword (.*) is entered in input field")
    public void enterKeyword(String keyword) {
        // Znajdź element wprowadzania tekstu na podstawie jego nazwy
        WebElement element = driver.findElement(By.name("q"));
        // Wyczyść tekst zapisany w elemencie
        element.clear();
        // Wpisz informacje do wyszukania
        element.sendKeys(keyword);
        // Prześlij formularz
        element.submit();}

    @Then("the first one should contain (.*)")
    public void theFirstOneShouldContainKeyword(String expectedText) {
        WebElement firstResult = driver.findElement(By.xpath("//h3"));
        System.out.println("txt:" + firstResult.getText());
        String actualText = firstResult.getText().toLowerCase();

        if(actualText.contains(expectedText.toLowerCase())) {
            System.out.println("PASS");
        } else {
            System.out.println("FAIL");
        }
    }


    @And("close browser")
    public void closeBrowser(){
        driver.quit();
    }

}
