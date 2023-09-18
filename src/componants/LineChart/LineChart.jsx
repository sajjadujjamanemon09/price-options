import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        {
          "studentName": "Student 1",
          "mathMarks": 85,
          "physicsMarks": 76,
          "chemistryMarks": 88
        },
        {
          "studentName": "Student 2",
          "mathMarks": 78,
          "physicsMarks": 82,
          "chemistryMarks": 90
        },
        {
          "studentName": "Student 3",
          "mathMarks": 92,
          "physicsMarks": 88,
          "chemistryMarks": 94
        },
        {
          "studentName": "Student 4",
          "mathMarks": 88,
          "physicsMarks": 79,
          "chemistryMarks": 91
        },
        {
          "studentName": "Student 5",
          "mathMarks": 76,
          "physicsMarks": 71,
          "chemistryMarks": 84
        },
        {
          "studentName": "Student 6",
          "mathMarks": 95,
          "physicsMarks": 89,
          "chemistryMarks": 97
        },
        {
          "studentName": "Student 7",
          "mathMarks": 82,
          "physicsMarks": 75,
          "chemistryMarks": 86
        },
        {
          "studentName": "Student 8",
          "mathMarks": 91,
          "physicsMarks": 84,
          "chemistryMarks": 92
        },
        {
          "studentName": "Student 9",
          "mathMarks": 89,
          "physicsMarks": 80,
          "chemistryMarks": 89
        },
        {
          "studentName": "Student 10",
          "mathMarks": 83,
          "physicsMarks": 77,
          "chemistryMarks": 87
        }
      ]
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="chemistryMarks"></Line>
                <Line dataKey="physicsMarks" stroke='black'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;