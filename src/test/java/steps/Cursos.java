package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;

public class Cursos {

    String url = "https://academy.hypeflame.com.br/home";
    WebDriver driver;

    @Before
    public void iniciar() {
        System.setProperty("webdriver.chrome.driver", "drivers/ChromeDriver/94/chromedriver.exe");
        driver = new ChromeDriver();
    }


    @After
    public void finalizar(){
        driver.quit();
    }

    @Dado("^que eu estou na pagina do HypeFlame Academy$")
    public void que_eu_estou_na_pagina_do_HypeFlame_Academy() throws Throwable {
        driver.get(url);
    }

    @Quando("^busco por \"([^\"]*)\"$")
    public void busco_por(String arg1) throws Throwable {
        driver.findElement(By.id("search")).sendKeys(arg1 + Keys.ENTER);

    }

    @Quando("^clico no botao MATRICULE-SE$")
    public void clico_no_botão_MATRICULE_SE() throws Throwable {
        driver.findElement(By.className("btn-enroll")).click();
    }

    @Entao("^verifico o nome do curso \"([^\"]*)\" e o valor \"([^\"]*)\"$")
    public void verifico_o_nome_do_curso_e_o_valor(String arg1, String arg2) throws Throwable {
        Assert.assertEquals(driver.findElement(By.className("cart-product-item")).getText(), arg1);
        Assert.assertEquals(driver.findElement(By.className("cart-product-price")).getText(), arg2);
    }




}