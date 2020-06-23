import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_icons/flutter_icons.dart';

class SocialMedia extends StatelessWidget {
  void launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  const SocialMedia({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          IconButton(
            icon: Icon(AntDesign.facebook_square),
            hoverColor: Colors.deepPurple,
            color: Colors.white,
            focusColor: Colors.deepOrangeAccent,
            onPressed: () {
              launchURL("https://www.facebook.com/nitishp25/");
            },
          ),
          IconButton(
            icon: Icon(AntDesign.instagram),
            color: Colors.white,
            onPressed: () {
              launchURL("https://www.instagram.com/_nitishpatel_/");
            },
          ),
          IconButton(
            icon: Icon(AntDesign.linkedin_square),
            color: Colors.white,
            onPressed: () {
              launchURL("https://www.linkedin.com/in/nitishp25/");
            },
          ),
          IconButton(
            icon: Icon(AntDesign.twitter),
            color: Colors.white,
            onPressed: () {
              launchURL("https://twitter.com/nitishpatel_");
            },
          ),
          IconButton(
            icon: Icon(Octicons.mark_github),
            color: Colors.white,
            onPressed: () {
              launchURL("https://github.com/nitishpatel");
            },
          ),
        ],
      ),
    );
  }
}