package com.organogram;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrganizationBO {

  private static final int TOP_LEVEL_ORG_ID = 0;
  private static final int MIN_INTERVAL = 1;

  @Autowired
  OrganizationMapper organizationMapper;

  public List<OrgUnit> selectOrgUnits(Integer userId) {
    List<OrgUnit> allOrgUnits = organizationMapper.selectAllOrgUnits();
    Set<Integer> openOrgIds = selectOpens(userId);
    return selectUserOrgUnits(allOrgUnits, openOrgIds);
  }

  public void deleteOrgUnit(Integer id) {
    List<Integer> orgIds = selectAllChildOrgIds(id);
    orgIds.add(id);
    organizationMapper.deleteOrgs(orgIds);
    organizationMapper.deleteOpens(orgIds);
  }

  public List<OrgUnit> openOrgUnit(Integer userId, Integer orgId) {
    List<OrgUnit> orgUnits = organizationMapper.selectChildOrgUnits(orgId);
    organizationMapper.insertOpens(userId, orgId);
    return orgUnits;
  }

  public void closeOrgUnit(Integer userId, Integer orgId) {
    List<Integer> orgIds = selectAllChildOrgIds(orgId);
    orgIds.add(orgId);
    organizationMapper.deleteUserOpens(userId, orgIds);
    return;
  }

  public void move(Integer id, Integer baseId, OrgMove orgMove) {
    switch (orgMove) {
      case UP:
        moveUp(id, baseId);
        break;
      case IN:
        moveIn(id, baseId);
        break;
      case DOWN:
        moveDown(id, baseId);
        break;
      default:
        break;
    }
  }

  public void moveUp(Integer id, Integer baseId) {
    OrgUnit endOrgUnit = organizationMapper.selectOrgUnit(baseId);
    OrgUnit startOrgUnit = organizationMapper.selectPrevOrgUnit(endOrgUnit.getOrder());
    organizationMapper.updateParentId(id, endOrgUnit.getParentId());
    updateDepthAndOrder(id, startOrgUnit, endOrgUnit, endOrgUnit.getDepth());
  }

  public void moveIn(Integer id, Integer baseId) {
    OrgUnit startOrgUnit = organizationMapper.selectOrgUnit(baseId);
    OrgUnit endOrgUnit = organizationMapper.selectNextOrgUnit(startOrgUnit.getOrder());
    organizationMapper.updateParentId(id, baseId);
    updateDepthAndOrder(id, startOrgUnit, endOrgUnit, startOrgUnit.getDepth() + 1);
  }

  public void moveDown(Integer id, Integer baseId) {
    OrgUnit baseOrgUnit = organizationMapper.selectOrgUnit(baseId);
    OrgUnit endOrgUnit = organizationMapper.selectLastOrgUnit(baseOrgUnit.getOrder(), baseOrgUnit.getDepth());
    OrgUnit startOrgUnit = organizationMapper.selectPrevOrgUnit(endOrgUnit == null ? Long.MAX_VALUE : endOrgUnit.getOrder());
    organizationMapper.updateParentId(id, baseOrgUnit.getParentId());
    updateDepthAndOrder(id, startOrgUnit, endOrgUnit, baseOrgUnit.getDepth());
  }

  public void updateDepthAndOrder(Integer id, OrgUnit startOrgUnit, OrgUnit endOrgUnit, Integer baseDepth) {
    Long startOrder = (startOrgUnit == null) ? Long.MIN_VALUE : startOrgUnit.getOrder();
    Long endOrder = (endOrgUnit == null) ? Long.MAX_VALUE : endOrgUnit.getOrder();

    List<Integer> childOrgIds = selectAllChildOrgIds(id);
    Long orderGap = (endOrder - startOrder - 1) / (childOrgIds.size() + 1);

    Integer depthGap = baseDepth - organizationMapper.selectOrgUnit(id).getDepth();
    organizationMapper.updateDepthAndOrder(id, depthGap, startOrder + orderGap);
    for(int i = 0 ; i < childOrgIds.size() ; i++) {
      organizationMapper.updateDepthAndOrder(childOrgIds.get(i), depthGap, startOrder + orderGap * (i+1));
    }
  }

  public void rearrange() {
    List<OrgUnit> allOrgUnits = organizationMapper.selectAllOrgUnits();
    for(int i = 0 ; i < allOrgUnits.size() ; i++) {
      organizationMapper.updateDepthAndOrder(allOrgUnits.get(i).getId(), 0, i * Long.MAX_VALUE / allOrgUnits.size());
    }
  }

  public List<Integer> selectAllChildOrgIds(Integer id) {
    OrgUnit startOrgUnit = organizationMapper.selectOrgUnit(id);
    OrgUnit endOrgUnit = organizationMapper.selectLastOrgUnit(startOrgUnit.getOrder(), startOrgUnit.getDepth());
    List<Integer> orgIds = organizationMapper.selectIdsByOrder(startOrgUnit.getOrder(), endOrgUnit == null ? Long.MAX_VALUE : endOrgUnit.getOrder());
    return orgIds;
  }

  public Set<Integer> selectOpens(Integer userId) {
    Set<Integer> openOrgIds = organizationMapper.selectOpenIds(userId);
    openOrgIds.add(TOP_LEVEL_ORG_ID);
    return openOrgIds;
  }

  public List<OrgUnit> selectUserOrgUnits(List<OrgUnit> allOrgUnits, Set<Integer> openOrgIds) {
    List<OrgUnit> orgUnits = new ArrayList<>();
    for(int i = 0 ; i < allOrgUnits.size(); i++) {
      if(openOrgIds.contains(allOrgUnits.get(i).getParentId())) {
        boolean hasChild = allOrgUnits.size() > i + 1 ? allOrgUnits.get(i+1).getDepth()  > allOrgUnits.get(i).getDepth() : false;
        allOrgUnits.get(i).setHasChild(hasChild);
        orgUnits.add(allOrgUnits.get(i));
      }
    }
    return orgUnits;
  }

  public Integer insertOrgUnits(OrgUnit orgUnit) {
    organizationMapper.insert(orgUnit);
    return orgUnit.getId();
  }
}
