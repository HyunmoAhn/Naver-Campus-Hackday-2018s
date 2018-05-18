package com.organogram;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizationMapper {

  List<OrgUnit> selectAllOrgUnits();
  Set<Integer> selectOpenIds(@Param("userId") Integer userId);
  OrgUnit selectOrgUnit(@Param("id") Integer id);

  OrgUnit selectLastOrgUnit(@Param("order") Long order, @Param("depth") Integer depth);
  List<Integer> selectIdsByOrder(@Param("startOrder") Long startOrder, @Param("endOrder") Long endOrder);
  Integer deleteOrgs(@Param("ids") List<Integer> ids);
  Integer deleteOpens(@Param("ids") List<Integer> ids);

  List<OrgUnit> selectChildOrgUnits(@Param("id") Integer id);
  Integer insertOpens(@Param("userId") Integer userId, @Param("orgId") Integer orgId);
  Integer deleteUserOpens(@Param("userId") Integer userId, @Param("orgIds") List<Integer> orgIds);

  OrgUnit selectPrevOrgUnit(@Param("order") Long order);
  OrgUnit selectNextOrgUnit(@Param("order") Long order);
  Integer updateParentId(@Param("id") Integer id, @Param("parentId") Integer parentId);
  Integer updateDepthAndOrder(@Param("id") Integer id, @Param("depthGap") Integer depthGap, @Param("order") Long order);

  void insert(OrgUnit orgUnit);


}
