import database_connection

@database_connection.connection_handler
def username_check(cursor, username):
    query = """
    SELECT user_name
    FROM user_data
    """
    cursor.execute(query)
    users_list = [requested_username['user_name'] for requested_username in cursor.fetchall()]
    if username in users_list:
        return True
    else:
        return False


@database_connection.connection_handler
def get_user_password(cursor, username):
    query = (f"""
    SELECT user_password
    FROM user_data
    WHERE user_name = '{username}'
    """)
    cursor.execute(query)
    data = cursor.fetchone()
    return data['user_password']


@database_connection.connection_handler
def registration_to_db(cursor, user_name, user_password):
    query = """
    INSERT INTO user_data(user_name,  user_password)
    VALUES  (%s, %s)
    """
    variables = (user_name, user_password)
    cursor.execute(query, variables)