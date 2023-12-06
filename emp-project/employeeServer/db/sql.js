
module.exports = {
 employeeList :`select e.emp_no, e.first_name, e.last_name, e.gender, e.hire_date, s.salary, d.dept_no, d.dept_name
                from employees e join dept_emp h on(e.emp_no = h.emp_no)
                 join departments d on (h.dept_no = d.dept_no)
                 join salaries s on (e.emp_no = s.emp_no)
                 where h.to_date = cast('9999-01-01' as date) 
                 and s.to_date =  cast('9999-01-01' as date)
                 order by e.emp_no desc
                 limit 0,10`,

 employeeGet :`select e.emp_no, e.first_name, e.last_name, e.gender, e.hire_date, s.salary, d.dept_no, d.dept_name
                 from employees e join dept_emp h on(e.emp_no = h.emp_no)
                 join departments d on (h.dept_no = d.dept_no)
                 join salaries s on (e.emp_no = s.emp_no)
                 where h.to_date = cast('9999-01-01' as date) 
                 and s.to_date =  cast('9999-01-01' as date)
                 and e.emp_no = ?`,
employeeUpdate : `update employees set first_name=?, last_name=?, gender=?, hire_date= cast(sysdate() as date) where emp_no = ? `,
InsertE :`insert into employees set ?`,



InsertD :`insert into dept_emp set emp_no=?, dept_no=?,from_date=?, to_date= cast('9999-01-01' as date)`,
 
employeeUpdate : `update employees set ?  where emp_no = ? `,
employeeDelete : `update dept_emp set to_date = ? where emp_no = ?`,


InsertS :`insert into salaries set ? `

}
