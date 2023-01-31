import Organization from "../Organization/Organization";
import React from "react";
import "./styles/organization-list.css";
import { fetchTax } from "../../redux/taxSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const OrganizationList = ({ organization, ownships }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTax());
  }, [dispatch]);
  const taxSystems = useSelector((state) => state.taxSystem.taxSystems);
  return (
    <div className="org-list">
      {organization?.map((org) => {
        const own = ownships.find((item) => item.id == org.form_id);
        return (
          <div>
            <Organization
              key={org.id}
              id={org.id}
              name={org.company_name}
              tin={org.company_tin}
              logo={org.logo}
              form={own?.short}
              type={own?.account_type}
              taxSystems={taxSystems}
            />
          </div>
        );
      })}
    </div>
  );
};
export default OrganizationList;
