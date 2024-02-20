package com.tecsup.edu.pe.gestordocumental.service;

import com.tecsup.edu.pe.gestordocumental.model.Documento;
import com.tecsup.edu.pe.gestordocumental.repository.DocumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/documentos")
public class DocumentoController {

    @Autowired
    private DocumentoRepository documentoRepository;

    // Endpoint de prueba para insertar documento
    /* @PostMapping("/add")
    public Documento add(@RequestBody Documento documento)
    {
        return documentoRepository.save(documento);
    }
    */

    // Endpoint para crear un nuevo documento
    @PostMapping("/create")
    public ResponseEntity<String> createDocument(@RequestBody Documento documento)
    {
        // Se establece la fecha de creacion
        documento.setCreated_at(new Date());
        // Se establece la fecha de creación
        documento.setUpdated_at(new Date());
        // Se establece el estado por defecto
        documento.setStatus(true);
        documentoRepository.save((documento));
        return ResponseEntity.status(HttpStatus.CREATED).body("Documento creado correctamente!");
    }

    // Endpoint para listar todos los documentos
    @GetMapping("/all")
    public ResponseEntity<List<Documento>> getAllDocumentos()
    {
        List<Documento> documentos = documentoRepository.findAll();
        return ResponseEntity.ok(documentos);
    }

    // Endpoint para obtener un documento por su ID
    @GetMapping("/search/{id}")
    public ResponseEntity<Documento> getDocumentoById(@PathVariable Integer id)
    {
        Optional<Documento> optionalDocumento = documentoRepository.findById(id);
        return optionalDocumento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Endpoint para actualizar un documento por su ID
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateDocumento(@PathVariable Integer id, @RequestBody Documento updateDocumentos)
    {
        Optional<Documento> optionalDocumento = documentoRepository.findById(id);
        if (optionalDocumento.isPresent()) {
            Documento documentos = optionalDocumento.get();
            // Se actualiza los campos del documento con valores nuevos ingresados
            documentos.setTitulo(updateDocumentos.getTitulo());
            documentos.setAutores(updateDocumentos.getAutores());
            documentos.setResumen(updateDocumentos.getResumen());
            documentos.setAnioPublicacion(updateDocumentos.getAnioPublicacion());
            documentos.setAsesor(updateDocumentos.getAsesor());
            documentos.setCategoria(updateDocumentos.getCategoria());
            documentos.setTema(updateDocumentos.getTema());
            documentos.setUpdated_at(new Date()); // Se establece fecha de modificacion
            documentoRepository.save(documentos);
            return ResponseEntity.ok("Documento actualizado correctamente!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Documento no encontrado!");
    }

    // Endpoint para eliminar un documento
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDocumento(@PathVariable Integer id)
    {
        Optional<Documento> optionalDocumento = documentoRepository.findById(id);
        if (optionalDocumento.isPresent())
        {
            documentoRepository.deleteById(id);
            return ResponseEntity.ok("Documento eliminado correctamente!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Documento no encontrado!");
    }

}
