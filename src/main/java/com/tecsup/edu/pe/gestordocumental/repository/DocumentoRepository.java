package com.tecsup.edu.pe.gestordocumental.repository;

import com.tecsup.edu.pe.gestordocumental.model.Documento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentoRepository extends JpaRepository<Documento, Integer> {

}
