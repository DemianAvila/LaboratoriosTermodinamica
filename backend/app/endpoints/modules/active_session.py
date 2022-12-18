def active_session_function(jwt, db):

    #CHECK IF JWT IS IN SESSION
    session = db.sessions.find_one(
        {
            "jwt": jwt
        }
    )
  
    #IF LEN 0, THERE IS NO ACTIVE SESSION
    return {
        "active_session": False if not session else True
    }

