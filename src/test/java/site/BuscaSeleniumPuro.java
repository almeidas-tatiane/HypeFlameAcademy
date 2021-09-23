package site;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BuscaSeleniumPuro {
    String url = "https://academy.hypeflame.com.br/home";
    WebDriver driver;

    @Before
    public void iniciar(){
        System.setProperty("webdriver.chrome.driver","C:\\Webdrivers\\ChromeDriver\\94\\chromedriver.exe");
        driver = new ChromeDriver();
    }

     @After
    public void finalizar(){
        driver.quit();

     }

     @Test
    public void buscaCurso(){
        driver.get(url);
        driver.findElement(By.id("search")).sendKeys("Android" + Keys.ENTER);
        driver.findElement(By.className("btn-enroll")).click();
        Assert.assertEquals(driver.findElement(By.className("cart-product-item")).getText(),"Android Development");
        Assert.assertEquals(driver.findElement(By.className("cart-product-price")).getText(),"R$ 149,90");


     }

}
