package ru.midas.server.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String Name;
    private String ImagePath;
    private String Description;
    private int Quantity;

    @Override
    public String toString(){
        return "Product{"+
                "id=" + getId() + "\n" +
                "name=" + getName() + "\n" +
                "quantity=" + getQuantity() + "\n";
    }

}