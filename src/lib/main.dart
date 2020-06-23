import 'package:flutter/material.dart';
import 'home.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Portfolio",
      home: HomeView(),
      theme: ThemeData(
        primaryColor: Color(0xFF6457a6),
        secondaryHeaderColor: Color(0xFF643173),
        highlightColor: Color(0xFFed6a5a)
      ),
    
    );
  }
}