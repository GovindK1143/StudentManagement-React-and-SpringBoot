package com.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.model.Student;
import com.web.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	//POST Mapping for Saving the Student
	@PostMapping("/student")
	public String saveStudent(@RequestBody Student student) {
		Student ss=service.saveStudent(student);
		
		String message=null;
		
		if(ss!=null)
			message="Student Data inserted Succesfully...";
		else
			message="Data Not Inserted(fail).....";
			
		return message;
		
	}
	
	
	//DELETE Mapping for Delete one particular Student Data by ID
	@DeleteMapping("/student/{studentId}")
	public void delete(@PathVariable Integer studentId) {
		
		service.deleteStudent(studentId);

	}
	
	//GET Mapping for getting List of All the Students Data
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return service.getAllStudents();
	}
	
	//GET Mapping for getting one Particular Student Data by ID
	@GetMapping("/student/{studentId}")
	public Student getOneStudent(@PathVariable Integer studentId){
		return service.getStudentById(studentId);
	}
	
	//PUT Mapping to Update one particular Student Data by ID 
	@PutMapping("/student/{studentId}")
	public Student updateProduct(@RequestBody Student student,@PathVariable Integer studentId)
	{
		Student s=service.getStudentById(studentId);
		
		s.setId(student.getId());
		s.setName(student.getName());
		s.setSub1(student.getSub1());
		s.setSub2(student.getSub2());
		s.setSub3(student.getSub3());
		s.setSub4(student.getSub4());
		s.setSub5(student.getSub5());
		
		return service.saveStudent(student);
		
	}

}
