package com.example.rest.controller;

import com.example.rest.dto.Request;
import com.example.rest.model.DataEntity;
import com.example.rest.repo.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/configurations")
public class DataController {
    @Autowired
    private DataRepository repository;

    @GetMapping("/{id}")
    public ResponseEntity<String[][]> getConfigurationById(@PathVariable String id) {
        Optional<DataEntity> dataEntity = repository.findById(id);

        if(dataEntity.isPresent()){
            DataEntity dataEntity1 = dataEntity.get();
            return ResponseEntity.ok(dataEntity1.getData());
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateConfigurationRemark(@PathVariable String id, @RequestBody Request request) {
        Optional<DataEntity> configurationEntityOptional = repository.findById(id);

        return configurationEntityOptional.map(configurationEntity -> {
            configurationEntity.setRemark(request.getRemark());
            repository.save(configurationEntity);
            return ResponseEntity.ok("Success");
        }).orElse(ResponseEntity.notFound().build());
    }

}
