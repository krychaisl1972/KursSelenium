package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class AddressPage {
    private static WebDriver driver;

    public AddressPage(WebDriver driver) {
            this.driver = driver;
        }
        public void addNewAddress(String alias, String address, String city, String postcode, String phone) {
            WebElement addNewAddress = driver.findElement(By.cssSelector(".addresses-footer > a:nth-child(1)"));
            addNewAddress.click();

            WebElement aliasInput = driver.findElement(By.name("alias"));
            aliasInput.click();
            aliasInput.clear();
            aliasInput.sendKeys(alias);

            WebElement addressInput = driver.findElement(By.name("address1"));
            addressInput.click();
            addressInput.clear();
            addressInput.sendKeys(address);

            WebElement cityInput = driver.findElement(By.name("city"));
            cityInput.click();
            cityInput.clear();
            cityInput.sendKeys(city);

            WebElement postcodeInput = driver.findElement(By.name("postcode"));
            postcodeInput.click();
            postcodeInput.clear();
            postcodeInput.sendKeys(postcode);

            WebElement countryInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/form/section/div[10]/div[1]/select"));
            countryInput.click();

            WebElement phoneInput = driver.findElement(By.name("phone"));
            phoneInput.click();
            phoneInput.clear();
            phoneInput.sendKeys(phone);


            WebElement saveButton = driver.findElement(By.cssSelector("btn.btn-primary.float-xs-right"));
            saveButton.click();
        }
        public String getNewAddress() {
            WebElement userAddress = driver.findElement(By.xpath("//*[@id=\"notifications\"]/div/article"));
            return userAddress.getText();
        }


}




