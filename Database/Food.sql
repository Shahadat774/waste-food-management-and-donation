PGDMP  6    
                }            food    17.2    17.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            
           1262    16418    food    DATABASE        CREATE DATABASE food WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE food;
                     postgres    false            �            1259    16433    fooddonations    TABLE     �   CREATE TABLE public.fooddonations (
    donation_id integer NOT NULL,
    user_id integer NOT NULL,
    food_des text NOT NULL,
    quantity integer NOT NULL,
    expiry_date date NOT NULL,
    location text
);
 !   DROP TABLE public.fooddonations;
       public         heap r       postgres    false            �            1259    16432    fooddonations_donation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fooddonations_donation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.fooddonations_donation_id_seq;
       public               postgres    false    220                       0    0    fooddonations_donation_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.fooddonations_donation_id_seq OWNED BY public.fooddonations.donation_id;
          public               postgres    false    219            �            1259    16447    requestfood    TABLE     �   CREATE TABLE public.requestfood (
    requestfoodid integer NOT NULL,
    donarename text,
    donarenumber text,
    foodaddress text,
    fooddescription text,
    fooddate date,
    user_id integer
);
    DROP TABLE public.requestfood;
       public         heap r       postgres    false            �            1259    16446    requestfood_requestfoodid_seq    SEQUENCE     �   CREATE SEQUENCE public.requestfood_requestfoodid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.requestfood_requestfoodid_seq;
       public               postgres    false    222                       0    0    requestfood_requestfoodid_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.requestfood_requestfoodid_seq OWNED BY public.requestfood.requestfoodid;
          public               postgres    false    221            �            1259    16420    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    phone text,
    address text
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16419    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public               postgres    false    218                       0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public               postgres    false    217            b           2604    16436    fooddonations donation_id    DEFAULT     �   ALTER TABLE ONLY public.fooddonations ALTER COLUMN donation_id SET DEFAULT nextval('public.fooddonations_donation_id_seq'::regclass);
 H   ALTER TABLE public.fooddonations ALTER COLUMN donation_id DROP DEFAULT;
       public               postgres    false    220    219    220            c           2604    16450    requestfood requestfoodid    DEFAULT     �   ALTER TABLE ONLY public.requestfood ALTER COLUMN requestfoodid SET DEFAULT nextval('public.requestfood_requestfoodid_seq'::regclass);
 H   ALTER TABLE public.requestfood ALTER COLUMN requestfoodid DROP DEFAULT;
       public               postgres    false    221    222    222            a           2604    16423    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public               postgres    false    218    217    218                      0    16433    fooddonations 
   TABLE DATA           h   COPY public.fooddonations (donation_id, user_id, food_des, quantity, expiry_date, location) FROM stdin;
    public               postgres    false    220   !                 0    16447    requestfood 
   TABLE DATA              COPY public.requestfood (requestfoodid, donarename, donarenumber, foodaddress, fooddescription, fooddate, user_id) FROM stdin;
    public               postgres    false    222   !                  0    16420    users 
   TABLE DATA           O   COPY public.users (user_id, name, email, password, phone, address) FROM stdin;
    public               postgres    false    218   �!                  0    0    fooddonations_donation_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.fooddonations_donation_id_seq', 11, true);
          public               postgres    false    219                       0    0    requestfood_requestfoodid_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.requestfood_requestfoodid_seq', 17, true);
          public               postgres    false    221                       0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 8, true);
          public               postgres    false    217            i           2606    16440     fooddonations fooddonations_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.fooddonations
    ADD CONSTRAINT fooddonations_pkey PRIMARY KEY (donation_id);
 J   ALTER TABLE ONLY public.fooddonations DROP CONSTRAINT fooddonations_pkey;
       public                 postgres    false    220            k           2606    16454    requestfood requestfood_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.requestfood
    ADD CONSTRAINT requestfood_pkey PRIMARY KEY (requestfoodid);
 F   ALTER TABLE ONLY public.requestfood DROP CONSTRAINT requestfood_pkey;
       public                 postgres    false    222            e           2606    16431    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            g           2606    16427    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            l           2606    16441 (   fooddonations fooddonations_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fooddonations
    ADD CONSTRAINT fooddonations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.fooddonations DROP CONSTRAINT fooddonations_user_id_fkey;
       public               postgres    false    220    218    4711            m           2606    16455 $   requestfood requestfood_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.requestfood
    ADD CONSTRAINT requestfood_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 N   ALTER TABLE ONLY public.requestfood DROP CONSTRAINT requestfood_user_id_fkey;
       public               postgres    false    218    222    4711               n   x�E�A
�0����D�Y��L)�kL����2�y�D���1#����&�o�X
��(:�2fʭ[�a�0_϶/�Nm��}�QZU$�Y{/��s�m�� "_��!�         8   x�34�,N-)�404713577��L���I�,(���4202�50�5��4����� )M          �   x�MN��0;'3�uM��>�Kǣ��2�	���
�YIl�V�]��Li�Mc#c����,`X�������
���f���i'5l.�T�?WQb���rw; ����>��Ӓ  	���]���Vw٥'C���y�32HȓS2]3�!*$ڜ<���_���\��ު���D|lLo     