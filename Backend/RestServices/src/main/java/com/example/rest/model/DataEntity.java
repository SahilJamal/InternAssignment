package com.example.rest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "example")
public class DataEntity {
    @Id
    private String id;
    private String[][] data = new String[0][3];

    private String remark;
    public DataEntity() {
    }

    public DataEntity(String id, String[][] data, String remark) {
        this.id = id;
        this.data = data;
        this.remark = remark;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String[][] getData() {
        return data;
    }

    public void setData(String[][] data) {
        this.data = data;
    }
}
