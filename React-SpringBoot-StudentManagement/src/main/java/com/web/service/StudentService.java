package com.web.service;

import java.util.List;

import com.web.model.Student;

public interface StudentService {
	
	public Student saveStudent(Student student);
	public void deleteStudent(Integer id);
	
	public Student getStudentById(Integer id);
	
	public List<Student> getAllStudents();
	
	public Student updateStudent(Student student);	
	

}
