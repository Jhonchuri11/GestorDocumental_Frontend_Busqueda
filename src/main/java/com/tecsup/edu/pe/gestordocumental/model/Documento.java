package com.tecsup.edu.pe.gestordocumental.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "documento")
public class Documento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "titulo", length = 100)
    private String titulo;

    @Column(name = "autores", length = 255)
    private String autores;

    @Column(name = "resumen", length = 1000)
    private String resumen;

    @Column(name = "anio_publicacion")
    private Integer anioPublicacion;

    @Column(name = "asesor", length = 100)
    private String asesor;

    @Column(name = "categoria", length = 50)
    private String categoria;

    @Column(name = "tema", length = 100)
    private String tema;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "created_at")
    @Temporal(TemporalType.DATE)
    private Date created_at;

    @Column(name = "updated_at")
    @Temporal(TemporalType.DATE)
    private Date updated_at;

    public Documento() {
    }
}
