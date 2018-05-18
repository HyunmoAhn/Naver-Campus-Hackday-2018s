package com.organogram;

import lombok.Data;

@Data
public class OrgUnit {
  private Integer id;
  private Integer parentId;
  private String name;
  private Long order;
  private Integer depth;
  private Boolean hasChild;
  public static final long INTERVAL = (long)Math.pow(10, 12);

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getParentId() {
    return parentId;
  }

  public void setPid(Integer parentId) {
    this.parentId = parentId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Long getOrder() {
    return order;
  }

  public void setOrder(Long order) {
    this.order = order;
  }

  public Integer getDepth() {
    return depth;
  }

  public void setDepth(Integer depth) {
    this.depth = depth;
  }

  public Boolean getHasChild() {
    return hasChild;
  }

  public void setHasChild(Boolean hasChild) {
    this.hasChild = hasChild;
  }

  public long getInterval() {
    return OrgUnit.INTERVAL;
  }
}
