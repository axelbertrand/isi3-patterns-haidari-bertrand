import java.util.List;
import java.util.ArrayList;

interface Component {
  void operation();
  boolean isVegetarian();
}

class Leaf implements Component {
  private String name;
  private boolean isVegetarian;

  public Leaf(String name, boolean isVegetarian) {
    this.name = name;
    this.isVegetarian = isVegetarian;
    System.out.println("Leaf ${this.name} created");
  }

  public void operation() {
    System.out.println("operation -> ${this.name}");
  }

  public boolean isVegetarian() {
    return this.isVegetarian;
  }
}

class Composite implements Component {
  private String name;
  private List<Component> children;

  public Composite(String name) {
    this.name = name;
    this.children = new ArrayList<>();
    System.out.println("Composite ${this.name} created");
  }

  public void operation() {
    System.out.println("Composite Operation for: " + this.name);
    for(Component element : this.children) {
      element.operation();
    }
  }

  public boolean isVegetarian() {
    return this.children.stream().allMatch(element -> element.isVegetarian());
  }

  public void add(Component component) {
    this.children.add(component);
  }

}

public class Main {
  public static void main(String[] args) {

    Composite sandwich = new Composite("pain");

    Composite garniture = new Composite("garniture");

    garniture.add(new Leaf("salade", true));
    garniture.add(new Leaf("tomate", true));
    garniture.add(new Leaf("oignons", true));
    //garniture.add(new Leaf("veau", false));
    garniture.add(new Leaf("steak soja", true));

    sandwich.add(garniture);
    sandwich.operation();

    if(sandwich.isVegetarian()) {
      System.out.println("Le sandwich est végétarien");
    }
    else {
      System.out.println("Le sandwich n'est pas végétarien");
    }
  }
}