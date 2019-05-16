import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

interface Visitor {
    void visit(Visitable item);
}

interface Visitable {
    void accept(Visitor visitor);
}

class KebabComponent implements Visitable {
    private String name;
    private boolean isVeget;
  
    public KebabComponent(String name, boolean isVeget) {
        this.name = name;
        this.isVeget = isVeget;
    }

    public KebabComponent(String name) {
        this(name, false);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isVegetarian() {
        return isVeget;
    }

    public void setVegetarian(boolean isVeget) {
        this.isVeget = isVeget;
    }
  
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
  
    public void operation() {
        System.out.println("operation -> ${this.name}");
    }
}

class VegetKebabVisitor implements Visitor {
    @Override
    public void visit(Visitable item) {
        KebabComponent kebabComponent = (KebabComponent) item;
        switch(kebabComponent.getName()) { 
            case "pain":
            case "garniture":
            case "salade":
            case "tomate":
            case "oignon":
            case "steak soja": { 
                kebabComponent.setVegetarian(true);
                break; 
            } 
            default: { 
                kebabComponent.setVegetarian(false);
                break; 
            } 
        }
    }
}

class Kebab implements Visitable {
    private List<KebabComponent> components = new ArrayList<>();
  
    public Kebab(KebabComponent[] components) {
        this(Arrays.asList(components));
    }

    public Kebab(List<KebabComponent> components) {
        this.components = components;
    }
  
    public void accept(Visitor visitor) {
        components.forEach(element -> element.accept(visitor));
    }
  
    public boolean isVegetarian() {
        return components.stream().allMatch(component -> component.isVegetarian());
    }
}

public class Main {
  public static void main(String[] args) {

    Kebab kebab = new Kebab(new KebabComponent[] {
        new KebabComponent("salade"), 
        new KebabComponent("tomate"), 
        new KebabComponent("oignon"),
        // new KebabComponent("veau")
    });

    kebab.accept(new VegetKebabVisitor());

    System.out.println(kebab);

    if(kebab.isVegetarian()) {
        System.out.println("Le kebab est végétarien");
    }
    else {
        System.out.println("Le kebab n'est pas végétarien");
    }
  }
}