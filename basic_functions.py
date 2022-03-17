import bcrypt


def get_hashed_password(plain_text_password):
    # Hash a password for the first time
    #   (Using bcrypt, the salt is saved into the hash itself)
    return bcrypt.hashpw(plain_text_password, bcrypt.gensalt())


def verify_password(typed_password, password_in_database):
    hashed_bytes_password = password_in_database.encode('utf-8')
    return bcrypt.checkpw(typed_password.encode('utf-8'), hashed_bytes_password)