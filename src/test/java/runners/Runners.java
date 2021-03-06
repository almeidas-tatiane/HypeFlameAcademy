package runners;

        import cucumber.api.CucumberOptions;
        import cucumber.api.junit.Cucumber;
        import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features =  "src\\test\\resources\\features\\Cursos.feature",
        glue = "steps",
        plugin = {"pretty","html:resources/cucumber.html"},
        monochrome = true
)
public class Runners {

}