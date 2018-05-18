package com.organogram;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class OrganizationController {

  @Autowired
  OrganizationBO organizationBO;

  @RequestMapping(value = "/orgunits", method = RequestMethod.GET)
  public List<OrgUnit> selectOrgUnits(@RequestHeader(value="userId") Integer userId) {
    return organizationBO.selectOrgUnits(userId);
  }

  @RequestMapping(value="/orgunits/{id}", method = RequestMethod.DELETE)
  public void deleteOrgUnit(@PathVariable Integer id) {
    organizationBO.deleteOrgUnit(id);
  }

  @RequestMapping(value="/open/{orgId}", method = RequestMethod.POST)
  public void open(@RequestHeader(value="userId") Integer userId, @PathVariable Integer orgId) {
    organizationBO.openOrgUnit(userId, orgId);
  }

  @RequestMapping(value="/open/{orgId}", method = RequestMethod.DELETE)
  public void openOrgUnit(@RequestHeader(value="userId") Integer userId, @PathVariable Integer orgId) {
    organizationBO.closeOrgUnit(userId, orgId);
  }

  @RequestMapping(value="/orgunits/{id}/move", method = RequestMethod.POST)
  public void move(@PathVariable Integer id, @RequestParam Integer baseId, @RequestParam OrgMove orgMove) {
    organizationBO.move(id, baseId, orgMove);
  }

  @PostMapping("/orgunits")
  public Integer insertOrgUnit(@RequestBody OrgUnit orgUnit) {

    if (orgUnit == null || StringUtils.isBlank(orgUnit.getName())) {
      return 0; // fixme: exception handler로 수정 할 것
    }

    return organizationBO.insertOrgUnits(orgUnit);
  }
}
