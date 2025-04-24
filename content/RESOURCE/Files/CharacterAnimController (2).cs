using UnityEngine;

public class CharacterAnimController : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float rotationSpeed = 180f;

    private CharacterController controller;
    private Animator animator;
    

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        controller = GetComponent<CharacterController>();
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        // 입력값
        float vertical = Input.GetAxis("Vertical");     // 전진/후진
        float horizontal = Input.GetAxis("Horizontal"); // 좌/우 회전

        // 전진 방향 벡터 계산
        Vector3 move = transform.forward * vertical;

        // 이동
        controller.SimpleMove(move * moveSpeed);

        // 회전
        transform.Rotate(0, horizontal * rotationSpeed * Time.deltaTime, 0);

        // 애니메이션 파라미터 설정 (절대값을 써야 후진도 동작됨)
        animator.SetFloat("Movement", vertical);

    }
}
