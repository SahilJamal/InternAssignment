package com.example.rest.repo;

import com.example.rest.model.DataEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DataRepository extends MongoRepository<DataEntity, String> {
}
