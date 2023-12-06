package com.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.model.Student;
import com.web.repository.StudentRepository;
@Service
public class StudentServiceImplementation implements StudentService {
	
	@Autowired
	private StudentRepository repo;
	
	
	@Override
	public Student saveStudent(Student student) {
		
	//condition that all subject marks should grater than 35
	if(student.getSub1()>=35 && student.getSub2()>=35 && student.getSub3()>=35 && student.getSub4()>=35 && student.getSub5()>=35)
	{
			
		Double total=(double) (student.getSub1()+student.getSub2()+student.getSub3()+student.getSub4()+student.getSub5());
		
		student.setTotal(total);
		
			Double percent=total/5;			
			student.setPercent(percent);
			
		if(percent>=80) {
			student.setGrade("A+");
			student.setRes("PASS");
		}
		else if(percent<80 && percent>=60) {
			student.setGrade("A");
			student.setRes("PASS");
			
		}
		else if(percent<60 && percent>=50) {
			student.setGrade("B");
			student.setRes("PASS");
			
		}
		else if(percent<50 && percent>=35) {
			student.setGrade("C");
			student.setRes("PASS");
			
		}
			
	}
	else 
		{
			
		Double total=(double) (student.getSub1()+student.getSub2()+student.getSub3()+student.getSub4()+student.getSub5());
			student.setTotal(total);
			
			Double percent=total/5;				
			student.setPercent(percent);
			
			student.setGrade("D");
			student.setRes("FAIL");
			
		}		
		
		return repo.save(student);
	}

	@Override
	public void deleteStudent(Integer id) {
		repo.deleteById(id);

	}

	@Override
	public Student getStudentById(Integer studentId) {
		return repo.findById(studentId).get();
		
	}

	@Override
	public List<Student> getAllStudents() {
		
		return repo.findAll();
	}

	@Override
	public Student updateStudent(Student student) {		
		return null;
	}

}
