import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'Responsiveness.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'SocialMedia.dart';

class HomeView extends StatefulWidget {
  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  Widget build(BuildContext context) {
    Widget bio = ResponsiveWidget.isSmallScreen(context) ? Bio() : BioWeb();

    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
          Color(0xFF8E2DE2),
          Color(0xFF4A00E0),
        ])),
        child: ListView(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(0.0, 50.0, 0.0, 20.0),
              child: Image(
                image: AssetImage("assets/personal.png"),
                height: 250.0,
              ),
            ),
            Center(
              child: Text(
                "< nitishpatel />",
                style:
                    GoogleFonts.montserrat(fontSize: 35.0, color: Colors.white),
              ),
            ),
            Center(
              child: SizedBox(
                child: TypewriterAnimatedTextKit(
                    onTap: () {
                      print("Tap Event");
                    },
                    repeatForever: true,
                    text: [
                      "Python & Flutter Developer",
                      "Cyber Security Enthusiast",
                    ],
                    textStyle: GoogleFonts.sourceCodePro(
                        fontWeight: FontWeight.w600, color: Colors.white),
                    textAlign: TextAlign.start,
                    alignment:
                        AlignmentDirectional.topStart // or Alignment.topLeft
                    ),
              ),
            ),
            bio,
            SocialMedia(),
            Center(
                child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("Made with",
                    style: GoogleFonts.montserrat(color: Colors.white)),
                Padding(
                  padding: const EdgeInsets.all(2.0),
                  child: Icon(
                    MaterialCommunityIcons.heart,
                    color: Colors.red,
                    size: 22.0,
                  ),
                ),
              ],
            ))
          ],
        ),
      ),
    );
  }
}



class Bio extends StatelessWidget {
  const Bio({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(60.0, 20.0, 60.0, 20.0),
        child: Text(
            "I am a Developer from Mumbai, I enjoy building everything from small sites to interactive Web & Mobile apps. I also have a deep interest in Cyber-Security. Always thinking for some startup ideas ,I love Indie Music,Street Food,Cricket.",
            style: GoogleFonts.dmSans(color: Colors.white, fontSize: 16.0)),
      ),
    );
  }
}

class BioWeb extends StatelessWidget {
  const BioWeb({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(400.0, 20.0, 400.0, 20.0),
        child: Text(
          "I am a Developer from Mumbai, I enjoy building everything from small sites to interactive Web & Mobile apps. I also have a deep interest in Cyber-Security. I Hate People who use Spaces instead of Tabs,Always thinking for some startup ideas ,I love Indie Music,Street Food,Cricket.",
          style: GoogleFonts.dmSans(color: Colors.white, fontSize: 20.0),
        ),
      ),
    );
  }
}
